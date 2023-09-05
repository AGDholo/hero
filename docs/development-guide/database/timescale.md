# TimescaleDB

TimescaleDB 是一个开源的时间序列数据库，它建立在 PostgresSQL 数据库之上。它可以高效地存储和查询时间序列数据，支持SQL查询语言。TimescaleDB
的一些关键特性包括:

- 自动分片技术 - 它会根据时间自动将数据分到不同的分片中，减少每个分片的数据量，提高查询效率。
- 压缩 - 它对老旧的数据进行压缩，减少存储空间。
- 索引 - 它会对时间列建立索引，加速时间范围查询。
- 并行处理 - 它支持跨分片进行并行查询，充分利用多核CPU。
- SQL支持 - 用户可以用标准SQL进行查询，无需学习新的查询语言。
- 与 PostgresSQL 完全兼容 - 可以利用 PostgresSQL 的所有特性和生态圈。
- TimescaleDB 广泛用于 IoT、监控、运维等需要处理大规模时间序列数据的场景。它的设计目标是使时间序列数据的存储和查询变得简单快速。

---

## 现实应用场景

Fiapp 消费者版本的 k 线数据一直存储在 postgres
上，但是因为不是专业序列优化的原因，一直以来读取数据都存在延迟性能问题，所以我们需要寻找一种数据库或者扩展方案来解决这个问题。  
在经过一段时间的调研后，我们发现了 timescaledb 这个项目，它是一个开源的时间序列数据库，它建立在 postgresql 数据库之上，且完美兼容
postgresql，实际应用过程中，不需要对原表和数据进行任何迁移和修改，只需要启用 timescaledb 扩展，然后一行命令创建超级表 hyper
table，就可以实现对原表的无缝升级，同时该命令也可以对 hyper table 进行自动分区，从而实现对数据的分片存储，提高查询性能。

---

## 安装

Fiapp 服务器基于 debian，所以我们需要查阅 timescaledb
的官方文档，找到对应的安装方式，官方文档地址：https://docs.timescale.com/self-hosted/latest/install/installation-linux/

虽然官方文档建议全新安装，卸载之前的 postgresql，但是我们的服务器上已经安装了 postgresql，所以这是不现实的。不过 timescaledb
只是一个扩展插件，所以我们只需要在服务器上安装好对应 postgresql 版本的 timescaledb，即可直接启用使用。

现在先假定我们已经安装好了 postgresql，接下来我们需要安装 timescaledb 的 apt 源，然后安装 timescaledb 的包，具体步骤如下：

```bash
# 安装 timescaledb 的 apt 源
echo "deb https://packagecloud.io/timescale/timescaledb/debian/ $(lsb_release -c -s) main" | sudo tee /etc/apt/sources.list.d/timescaledb.list

# 安装 timescaledb 的 GPG 密钥
wget --quiet -O - https://packagecloud.io/timescale/timescaledb/gpgkey | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/timescaledb.gpg

# 更新 apt 源
apt update

# 安装 timescaledb
apt install timescaledb-2-postgresql-[version]
```

需要注意的是，最后一步 `apt install timescaledb-2-postgresql-[version]` 中的 `[version]` 需要替换成对应的 postgresql
版本，例如我们服务器上使用的是最新版本 15，那么就需要执行 `apt install timescaledb-2-postgresql-15`。

## 配置 timescaledb

```bash
# 运行以下命令以启动 timescaledb 的配置向导
sudo timescaledb-tune

# 首先，系统会要求您确认 PostgresSQL 配置文件的路径等：
Output
Using postgresql.conf at this path:
/etc/postgresql/15/main/postgresql.conf

Is this correct? [(y)es/(n)o]:
```

一路键入 `y` 即可安装，当然你也可以根据输出内容进行配置的微调。

## 启用 timescaledb

```bash
# 连接到 postgresql
sudo -u postgres psql

# 现在创建一个新数据库并连接到它。timeseries ：
CREATE DATABASE timeseries;
\c timeseries

# 现在，我们将启用 timescaledb 扩展：
CREATE EXTENSION IF NOT EXISTS timescaledb CASCADE;
```

您将看到以下类似的输出：

```bash
Output
WARNING:
WELCOME TO
 _____ _                               _     ____________
|_   _(_)                             | |    |  _  \ ___ \
  | |  _ _ __ ___   ___  ___  ___ __ _| | ___| | | | |_/ /
  | | | |  _ ` _ \ / _ \/ __|/ __/ _` | |/ _ \ | | | ___ \
  | | | | | | | | |  __/\__ \ (_| (_| | |  __/ |/ /| |_/ /
  |_| |_|_| |_| |_|\___||___/\___\__,_|_|\___|___/ \____/
               Running version 1.7.1
For more information on TimescaleDB, please visit the following links:

 1. Getting started: https://docs.timescale.com/getting-started
 2. API reference documentation: https://docs.timescale.com/api
 3. How TimescaleDB is designed: https://docs.timescale.com/introduction/architecture

Note: TimescaleDB collects anonymous reports to better understand and assist our users.
For more information and how to disable, please see our docs https://docs.timescaledb.com/using-timescaledb/telemetry.

CREATE EXTENSION
```

这时候，你的 timescaledb 就已经安装好了，接下来我们就可以开始使用了。

## 使用 timescaledb

在 timescaledb
中，我们需要对原有表创建一个超级表，这个超级表是附加在原表之上的，你无需对任何表、任何数据库改动任何结构，它只是一个表概念，虽然它实际存在，但是你无需关心它。  
超级表的作用就是 timescaledb 会自动对超级表进行分区，从而实现数据的分片存储，提高查询性能。

```bash
# 创建原始数据表
CREATE TABLE conditions (
  time        TIMESTAMP WITH TIME ZONE NOT NULL,
  device_id   TEXT,
  temperature  NUMERIC,
  humidity     NUMERIC
);
```

此命令将创建一个包含 conditions 四列的表。第一列将存储时间戳，其中包括时区，不能为空。接下来，您将使用时间列将表转换为按时间分区的超表：

```bash
SELECT create_hypertable('conditions', 'time');
```

此命令调用该 create_hypertable() 函数，该函数从 PostgresSQL 表创建 TimescaleDB 超表，替换后者。 这时候超表就创建完成了。

你无需关注任何超表的内容，因为他们都是自动同步扩展的，你只需要关注原表的内容即可。

## 现实案例

Fiapp 存在一个已有的 k 线表，包含如下结构：

```bash
    Column    |           Type           | Collation | Nullable |      Default      
--------------+--------------------------+-----------+----------+-------------------
 id           | uuid                     |           | not null | gen_random_uuid()
 created_at   | timestamp with time zone |           |          | now()
 open_at      | timestamp with time zone |           | not null | 
 open_bid     | numeric                  |           | not null | 
 highest_bid  | numeric                  |           | not null | 
 lowest_bid   | numeric                  |           | not null | 
 close_bid    | numeric                  |           | not null | 
 volume_bid   | numeric                  |           |          | 
 timeframe_id | uuid                     |           | not null | 
 coin_id      | uuid                     |           | not null | 
```

这时候如果直接运行命令，

```bash
SELECT create_hypertable('kline', 'open_at');
```

会提示原表已经有数据了，那么我们只需要添加一个参数即可无缝迁移：

```bash
SELECT create_hypertable('kline', 'open_at', migrate_data := true);
```

不过这时候又会提示，`open_at` 不是唯一主键，因为我们的表设计，是无法只针对 `open_at`
设置一个唯一主键的，我们目前的主键已经有 `id` 了，所以我们只需要确保 `open_at` 在唯一主键中即可，所以我们需要在原有的 `id`
主键上添加 `open_at`，这样就可以了。

再次运行命令，即可成功迁移和分区，此时我们的所有 api 依然原样不动，读取数据的方式也没有任何修改，数据库就自动提速，所以这个方案成本极低，兼容性极强。

大家可以在 https://fiapp.pro/chart/ADAUSDT 感受 k 线加载速度，同时也点击左侧栏的各种币来感受速度提升。