import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import React, { useState } from 'react';
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
    const [columns, setColumns] = useState(columnData);
    return (
      <div className="content-backdrop">
        <div className="content-question-title">Sorteeroefening</div>
        <div className="content-question-text">{content}</div>
        <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
        <DragDropContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  width: '100%',
                  flexDirection: "column",
                }}
                key={columnId}
              >
                <div className="content-sorting-title">{column.name}</div>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
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
                            minHeight: 200,
                            borderRadius: 10
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
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
                                        margin: "0 0 8px 0",
                                        minHeight: "40px",
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
        </div>
      </div>
    );
}