import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    useMemo
  } from "react";
  import styled from "styled-components";
  import Icon from "./Illustrations/Icon.jsx";
  
  const StyledAccordion = styled.div`
    border: solid 1px var(--idewe-background-solid);
    border-radius: 4px;
    margin: 10px;
  `;
  
  const StyledAccordionItem = styled.button`
    align-items: center;
    background: none;
    border: none;
    display: flex;
    font-weight: normal;
    font-size: 1em;
    padding: 10px;
    text-align: left;
    width: 100%;
  
    &:focus {
      box-shadow: 0 0 2px 1px var(--idewe-background-solid);
    }
  `;
  
  const Item = styled.div`
    border-top: 1px solid var(--idewe-background-solid);
    background: var(--idewe-white);
  
    &:first-child {
      border-top: 0;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  
    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  `;
  
  const ExpandableSection = styled.section`
    background: var(--idewe-white);
    border-top: solid 1px var(--idewe-background-solid);
    padding: 10px;
    padding-left: 20px;
  `;
  
  const AccordionContext = createContext();
  
  function useAccordionContext() {
    const context = useContext(AccordionContext);
    if (!context) {
      // Error message should be more descriptive
      throw new Error("No context found for Accordion");
    }
    return context;
  }
  
  function Accordion({ children, defaultExpanded = "wine", striped = true }) {
    const [activeItem, setActiveItem] = useState(defaultExpanded);
    const setToggle = useCallback(
      (value) => {
        setActiveItem(() => {
          if (activeItem !== value) return value;
          return "";
        });
      },
      [setActiveItem, activeItem]
    );
  
    const value = useMemo(
      () => ({
        activeItem,
        setToggle,
        defaultExpanded,
        striped
      }),
      [setToggle, activeItem, striped, defaultExpanded]
    );
  
    return (
      <AccordionContext.Provider value={value}>
        <StyledAccordion>{children}</StyledAccordion>
      </AccordionContext.Provider>
    );
  }
  
    function ChevronComponent({ isExpanded }) {
        const rotation = isExpanded ? "rotate(90deg)" : "";
        return  <Icon image="next" color="blue" style={{transition: ".2s ease-in-out", transform:rotation}} />;
    }
  
  function AccordionItem({ value, children }) {
    const { activeItem, setToggle, striped } = useAccordionContext();
  
    return (
      <Item striped={striped}>
        <StyledAccordionItem
          aria-controls={`${value}-panel`}
          aria-disabled="false"
          aria-expanded={value === activeItem}
          id={`${value}-header`}
          onClick={() => setToggle(value)}
          selected={value === activeItem}
          type="button"
          value={value}
        >
          <ChevronComponent isExpanded={activeItem === value} />
          {children}
        </StyledAccordionItem>
        <ExpandableSection
          aria-hidden={activeItem !== value}
          aria-labelledby={`${value}-header`}
          expanded
          hidden={activeItem !== value}
          id={`${value}-panel`}
        >
          Showing expanded content about {value}
        </ExpandableSection>
      </Item>
    );
  }
  
  export { Accordion, AccordionItem };
  