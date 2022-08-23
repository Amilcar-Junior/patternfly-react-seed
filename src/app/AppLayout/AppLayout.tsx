import * as React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import {
  Nav,
  NavList,
  NavItem,
  NavExpandable,
  Page,
  PageHeader,
  PageSidebar,
  SkipToContent,
  ApplicationLauncher,
  ApplicationLauncherItem,
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Dropdown,
  DropdownGroup,
  DropdownToggle,
  DropdownItem,
  KebabToggle,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  PageToggleButton,
} from '@patternfly/react-core';
import { routes, IAppRoute, IAppRouteGroup } from '@app/routes';
import logo from '@app/bgimages/Patternfly-Logo.svg';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import AvatarIcon from '@patternfly/react-icons/dist/esm/icons/user-circle-icon';
import imgAvatar from '@app/bgimages/img_avatar.svg';

interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout: React.FunctionComponent<IAppLayout> = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = React.useState(true);
  const [isMobileView, setIsMobileView] = React.useState(true);
  const [isNavOpenMobile, setIsNavOpenMobile] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = React.useState(false);
  const [isFullKebabDropdownOpen, setIsFullKebabDropdownOpen] = React.useState(false);
  const [isAppLauncherOpen, setIsAppLauncherOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);
  const onNavToggleMobile = () => {
    setIsNavOpenMobile(!isNavOpenMobile);
  };
  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  const onPageResize = (props: { mobileView: boolean; windowSize: number }) => {
    setIsMobileView(props.mobileView);
  };

  const onDropdownToggle = (isDropdownOpen: boolean) => {
    setIsDropdownOpen(isDropdownOpen);
  }
    
  const onDropdownSelect = (isDropdownOpen: boolean) => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  
  const onKebabDropdownToggle = (isKebabDropdownOpen: boolean) => {
    setIsKebabDropdownOpen(isKebabDropdownOpen);
  }
 

  const onKebabDropdownSelect = (isKebabDropdownOpen: boolean) => {
    setIsKebabDropdownOpen(!isKebabDropdownOpen);
  }
  
  const onFullKebabToggle = (isFullKebabDropdownOpen: boolean) => {
    setIsFullKebabDropdownOpen(isFullKebabDropdownOpen);
  }

  const onFullKebabSelect = (isFullKebabDropdownOpen: boolean) => {
    setIsFullKebabDropdownOpen(!isFullKebabDropdownOpen);
  }

  

  const onAppLauncherToggle = (isAppLauncherOpen: boolean) => {
    setIsAppLauncherOpen(isAppLauncherOpen);
  }

  const onAppLauncherSelect = (isAppLauncherOpen: boolean) => {
    setIsAppLauncherOpen(!isAppLauncherOpen);
  }


  function LogoImg() {
    const history = useHistory();
    function handleClick() {
      history.push('/');
    }
    return <img src={logo} onClick={handleClick} alt="PatternFly Logo" />;
  }

  const kebabDropdownItems = [
    <DropdownItem key="kebab-1">
      <CogIcon /> Settings
    </DropdownItem>,
    <DropdownItem key="kebab-2">
      <HelpIcon /> Help
    </DropdownItem>,
  ];
  const userDropdownItems = [
    <DropdownGroup key="group 2">
      <DropdownItem key="group 2 profile">My profile</DropdownItem>
      <DropdownItem key="group 2 user" component="button">
        User management
      </DropdownItem>
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
    </DropdownGroup>,
  ];

  const appLauncherItems = [
    <ApplicationLauncherItem key="application_1a" href="#">
      Application 1 (anchor link)
    </ApplicationLauncherItem>,
    <ApplicationLauncherItem key="application_2a" component="button" onClick={() => alert('Clicked item 2')}>
      Application 2 (button with onClick)
    </ApplicationLauncherItem>,
  ];

  
  const headerToolbar = (
    <Toolbar id="toolbar" isFullHeight isStatic>
      <ToolbarContent>
        <ToolbarGroup
          variant="icon-button-group"
          alignment={{ default: 'alignRight' }}
          spacer={{ default: 'spacerNone', md: 'spacerMd' }}
        >
          <ToolbarItem>
            <Button aria-label="Notifications" variant={ButtonVariant.plain} icon={<BellIcon />} >Notification</Button>
          </ToolbarItem>
          <ToolbarGroup variant="icon-button-group" visibility={{ default: 'hidden', lg: 'visible' }}>
            <ToolbarItem visibility={{ default: 'hidden', sm: 'hidden', lg: 'visible' }}>
              <ApplicationLauncher
                onSelect={onAppLauncherSelect}
                onToggle={onAppLauncherToggle}
                isOpen={isAppLauncherOpen}
                items={appLauncherItems}
              />
            </ToolbarItem>
            <ToolbarItem>
              <Button aria-label="Settings" variant={ButtonVariant.plain} icon={<CogIcon />} >Settings</Button>
            </ToolbarItem>
            <ToolbarItem>
              <Button aria-label="Help" variant={ButtonVariant.plain} icon={<HelpIcon />} >Help</Button>
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarItem visibility={{ lg: 'hidden' }}>
            <Dropdown
              isPlain
              position="right"
              onSelect={onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarItem visibility={{ default: 'hidden', sm: 'visible' }}>
          <Dropdown
            isFullHeight
            onSelect={onDropdownSelect}
            isOpen={isDropdownOpen}
            toggle={
              <DropdownToggle icon={<AvatarIcon/>} onToggle={onDropdownToggle}>
                Username
              </DropdownToggle>
            }
            dropdownItems={userDropdownItems}
          />
        </ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  const Header = (
    <Masthead >
      <MastheadToggle>
        <PageToggleButton
          variant="plain"
          aria-label="Global navigation"
          isNavOpen={isNavOpen}
          onNavToggle={isMobileView ? onNavToggleMobile : onNavToggle}
        >
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand href="https://patternfly.org" target="_blank">
        <LogoImg />
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  const location = useLocation();

  const renderNavItem = (route: IAppRoute, index: number) => (
    <NavItem key={`${route.label}-${index}`} id={`${route.label}-${index}`} isActive={route.path === location.pathname}>
      <NavLink exact={route.exact} to={route.path}>
        {route.label}
      </NavLink>
    </NavItem>
  );

  const renderNavGroup = (group: IAppRouteGroup, groupIndex: number) => (
    <NavExpandable
      key={`${group.label}-${groupIndex}`}
      id={`${group.label}-${groupIndex}`}
      title={group.label}
      isActive={group.routes.some((route) => route.path === location.pathname)}
    >
      {group.routes.map((route, idx) => route.label && renderNavItem(route, idx))}
    </NavExpandable>
  );

  const Navigation = (
    <Nav id="nav-primary-simple" theme="dark">
      <NavList id="nav-list-simple">
        {routes.map(
          (route, idx) => route.label && (!route.routes ? renderNavItem(route, idx) : renderNavGroup(route, idx))
        )}
      </NavList>
    </Nav>
  );

  const Sidebar = <PageSidebar theme="dark" nav={Navigation} isNavOpen={isMobileView ? isNavOpenMobile : isNavOpen} />;

  const pageId = 'primary-app-container';

  const PageSkipToContent = (
    <SkipToContent
      onClick={(event) => {
        event.preventDefault();
        const primaryContentContainer = document.getElementById(pageId);
        primaryContentContainer && primaryContentContainer.focus();
      }}
      href={`#${pageId}`}
    >
      Skip to Content
    </SkipToContent>
  );
  return (
    <Page
      mainContainerId={pageId}
      header={Header}
      sidebar={Sidebar}
      onPageResize={onPageResize}
      skipToContent={PageSkipToContent}
    >
      {children}
    </Page>
  );
};

export { AppLayout };
