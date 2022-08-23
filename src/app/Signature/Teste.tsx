import * as React from 'react';
import {
  Brand,
  Bullseye,
  Button,
  Card,
  CardActions,
  CardBody,
  CardContext,
  CardHeader,
  CardHeaderMain,
  CardTitle,
  Checkbox,
  Dropdown,
  DropdownItem,
  DropdownSeparator,
  EmptyState,
  EmptyStateIcon,
  EmptyStateSecondaryActions,
  EmptyStateVariant,
  Gallery,
  KebabToggle,
  OverflowMenuControl,
  OverflowMenuDropdownItem,
  PageSection,
  PageSectionVariants,
  PageToggleButton,
  Pagination,
  SearchInput,
  Text,
  TextContent,
  Title,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
} from '@patternfly/react-core';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import CardIcon from '@app/bgimages/health.png';
import TrashIcon from '@patternfly/react-icons/dist/esm/icons/trash-icon';
import FileIcon from '@patternfly/react-icons/dist/esm/icons/file-pdf-icon';
import PenIcon from '@patternfly/react-icons/dist/esm/icons/pen-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

const Teste: React.FunctionComponent = () => {
  const [isLowerToolbarDropdownOpen, setIsLowerToolbarDropdownOpen] = React.useState(false);
  const [isLowerToolbarKebabDropdownOpen, setIsLowerToolbarKebabDropdownOpen] = React.useState(false);

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);
  const [totalItemCount, setTotalItemCount] = React.useState(10);

  const onToolbarDropdownToggle = (isLowerToolbarDropdownOpen: boolean) => {
    setIsLowerToolbarDropdownOpen(isLowerToolbarDropdownOpen);
  };

  const onToolbarKebabDropdownToggle = (isLowerToolbarKebabDropdownOpen: boolean) => {
    setIsLowerToolbarKebabDropdownOpen(isLowerToolbarKebabDropdownOpen);
  };

  const onToolbarKebabDropdownSelect = (event) => {
    setIsLowerToolbarKebabDropdownOpen(!isLowerToolbarKebabDropdownOpen);
  };

  const onSelect = () => {
    setIsOpen(!isOpen);
  };
  const onClick = (checked: boolean) => {
    setIsChecked(checked);
  };

  const dropdownItems = [
    <DropdownItem key="trash">
      <TrashIcon />
      Deletar
    </DropdownItem>,
    <DropdownItem key="edit">
      <PenIcon />
      Editar
    </DropdownItem>,
    <DropdownItem key="edit">
      <PenIcon />
      Assinatura
    </DropdownItem>,
  ];

  const toolbarKebabDropdownItems = [
    <OverflowMenuDropdownItem key="link">Link</OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem key="action" component="button">
      Action
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem key="disabled link" isDisabled>
      Disabled Link
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem key="disabled action" isDisabled component="button">
      Disabled Action
    </OverflowMenuDropdownItem>,
    <DropdownSeparator key="separator" />,
    <OverflowMenuDropdownItem key="separated link">Separated Link</OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem key="separated action" component="button">
      Separated Action
    </OverflowMenuDropdownItem>,
  ];

  const items = (
    <React.Fragment>
      <ToolbarItem variant="search-filter">
        <SearchInput aria-label="search input example" />
      </ToolbarItem>
      <ToolbarItem>
        <NavLink to="assinatura/adicionar">
          <Button variant="primary">Adicionar</Button>
        </NavLink>
      </ToolbarItem>
      <ToolbarItem variant="separator" />
      <ToolbarItem>
        <OverflowMenuControl hasAdditionalOptions>
          <Dropdown
            onSelect={onToolbarKebabDropdownSelect}
            toggle={<KebabToggle onToggle={onToolbarKebabDropdownToggle} id="toggle-id-6" />}
            isOpen={isLowerToolbarKebabDropdownOpen}
            isPlain
            dropdownItems={toolbarKebabDropdownItems}
            menuAppendTo="parent"
          />
        </OverflowMenuControl>
      </ToolbarItem>
      <ToolbarItem variant="pagination" alignment={{ default: 'alignRight' }}>
        <RenderPagination />
      </ToolbarItem>
    </React.Fragment>
  );

  const onSetPage = (_event: React.MouseEvent | React.KeyboardEvent | MouseEvent, newPage: number) => {
    setPage(newPage);
  };

  const onPerPageSelect = (
    _event: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    newPerPage: number,
    newPage: number
  ) => {
    setPerPage(newPerPage);
    setPage(newPage);
  };

  function RenderPagination() {
    const defaultPerPageOptions = [
      {
        title: '1',
        value: 1,
      },
      {
        title: '5',
        value: 5,
      },
      {
        title: '10',
        value: 10,
      },
    ];

    return (
      <Pagination
        // perPageComponent="button"
        itemCount={523}
        perPage={perPage}
        page={page}
        onSetPage={onSetPage}
        widgetId="pagination-options-menu-top"
        onPerPageSelect={onPerPageSelect}
        isCompact
      />
    );
  }

  return (
    <React.Fragment>
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component="h1">Assinatura</Text>
          <Text component="p">Associe suas assinaturas aos ficheiros / pdf</Text>
        </TextContent>
        <Toolbar id="toolbar-group-types">
          <ToolbarContent>{items}</ToolbarContent>
        </Toolbar>
      </PageSection>

      <PageSection variant={PageSectionVariants.default}>
        <Gallery hasGutter aria-label="Selectable card container">
          <Card isCompact>
            <Bullseye>
              <EmptyState variant={EmptyStateVariant.xs}>
                <EmptyStateIcon icon={PlusCircleIcon} />
                <Title headingLevel="h2" size="md">
                  Adiciona um novo ficheiro
                </Title>
                <EmptyStateSecondaryActions>
                <NavLink to="assinatura/adicionar">
                  <Button variant="link">Adicionar ficheiro</Button>
                  </NavLink>
                </EmptyStateSecondaryActions>
              </EmptyState>
            </Bullseye>
          </Card>
          <Card>
            <CardHeader>
              <CardHeaderMain>
                <Brand src={CardIcon} alt="PatternFly logo" style={{ height: '50px' }} />
              </CardHeaderMain>
              <CardActions>
                <Dropdown
                  onSelect={onSelect}
                  toggle={<KebabToggle onToggle={setIsOpen} />}
                  isOpen={isOpen}
                  isPlain
                  dropdownItems={dropdownItems}
                  position={'right'}
                />
                <Checkbox
                  isChecked={isChecked}
                  onChange={onClick}
                  aria-label="card checkbox example"
                  id="check-1"
                  name="check1"
                />
              </CardActions>
              
            </CardHeader>
                
                <CardTitle style={{ textAlign: "center" }}>Titulo</CardTitle>
                <CardBody style={{ textAlign: "center" }}>Body</CardBody>
            
          </Card>
        </Gallery>
      </PageSection>
      <PageSection
        isFilled={false}
        style={{ position: 'fixed', left: '0', bottom: '0', width: '100%' }}
        padding={{ default: 'noPadding' }}
        sticky="bottom"
        variant="light"
      >
        <Pagination
          itemCount={totalItemCount}
          page={page}
          perPage={perPage}
          onPerPageSelect={onPerPageSelect}
          onSetPage={onSetPage}
          variant="bottom"
        />
      </PageSection>
    </React.Fragment>
  );
};

export { Teste };
