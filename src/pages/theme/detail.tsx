import * as React from 'react';
import {CommandBar} from 'office-ui-fabric-react/lib';
import {useLocation, BrowserRouter as Router} from 'react-router-dom';
import queryString from 'query-string';

import {
  IButtonProps,
  ICommandBarItemProps,
  initializeIcons,
} from '@fluentui/react';
initializeIcons();

function useQuery() {
  return queryString.parse(useLocation().search);
}

const overflowProps: IButtonProps = {ariaLabel: 'More commands'};

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

const NavBar = () => {
  const query = useQuery();

  const _items: ICommandBarItemProps[] = [
    {
      key: 'home',
      text: 'HeroUI Theme',
      iconProps: {iconName: 'Back'},
      href: '/',
    },
  ];

  const _farItems: ICommandBarItemProps[] = [
    {
      key: 'free-download-now',
      text: '免费下载',
      iconProps: {iconName: 'ChevronDownEnd6'},
      href: `https://github.com/AGDholo/${query.template}`,
      target: '_black',
    },
    {
      key: 'remove-bar',
      text: '移除顶栏',
      iconProps: {iconName: 'BlockedSite'},
      href: `https://${query.template}.heroui.net`,
      target: '_black',
    },
  ];

  return (
    <div>
      <CommandBar
        items={_items}
        overflowButtonProps={overflowProps}
        farItems={_farItems}
      />
    </div>
  );
};

// Example formatting
export const ButtonDefaultExample: React.FunctionComponent<IButtonExampleProps> = (
  props,
) => {
  const {disabled, checked} = props;

  const query = useQuery();

  return (
    <div
      style={{
        overflowX: 'hidden',
      }}>
      <NavBar />
      <div
        style={{
          height: 'calc(100vh - 44px)',
          width: '100vw',
        }}>
        <iframe
          src={`https://${query.template}.heroui.net`}
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

function _alertClicked(): void {
  alert('Clicked');
}

export default ButtonDefaultExample;
