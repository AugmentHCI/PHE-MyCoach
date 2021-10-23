import React, { useState } from 'react';

/* External API */
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

/* UI Components */
import Button from "../../components/Button.jsx";

/* Styles */
import './ContentParser.scss';

const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
  
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
  };
  
export default function createSortingContent(content, columnData, options) {
  const defaultStyle = {
    display: "flex",
    width: "100%",
    flexDirection: "row",
  }
  const columnStyle = {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  }
  const [columns, setColumns] = useState(columnData);
  const [saved, setSaved] = useState(false);

  function save() {
    setSaved(true);
  }

  return (
    <div className="content-backdrop">
      <div className="content-question-title">Sorteeroefening</div>
      <div className="content-question-text">{content}</div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          if (index === 0 && column.items.length === 0) return <React.Fragment/>;
          return (
            <div
              style={index === 0 ? defaultStyle :  columnStyle}
              key={columnId}
            >
              {index !== 0 && <div className="content-sorting-title">{column.name}</div> }
              <div style={{ margin: index === 0 ? "8px" : "2px 8px 12px 8px", width: index === 0 ? "100%" : ""}}>
                <Droppable droppableId={columnId} key={columnId} direction={index === 0 ? "horizontal" : "vertical"}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "var(--idewe-white)",
                          padding: 4,
                          width: '100%',
                          minWidth: 80,
                          minHeight: index === 0 ? 56 : 200,
                          borderRadius: 10,
                          display: index === 0 ? "flex" : "",
                          flexWrap: index === 0 ? "wrap" : ""
                        }}
                      >
                        {column.items.map((item, itemIndex) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={itemIndex}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      textAlign: "center",
                                      justifyContent: "center",
                                      padding: 9,
                                      margin: index === 0 ? "4px" : "0 0 8px 0",
                                      minHeight: "40px",
                                      width: index === 0 ? "min-content" : "100%",
                                      borderRadius: 10,
                                      fontFamily: "var(--main-font)",
                                      backgroundColor: snapshot.isDragging
                                        ? "var(--idewe-blue-dark)"
                                        : "var(--idewe-blue)",
                                      color: "white",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.content}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
      {columns.default.items.length === 0 && !saved && <Button center color="blue" onClick={()=> save()}>Versturen</Button>}
      {columns.default.items.length === 0 && saved && <Button center color="gray-dark">Verstuurd</Button>}
      </div>
    </div>
  );
}