import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function KanbanBoard() {
  const columns = [
    { id: "column-1", title: "To Do", cardIds: ["card-1", "card-2", "card-3"] },
    { id: "column-2", title: "In Progress", cardIds: ["card-4", "card-5"] },
    { id: "column-3", title: "Done", cardIds: ["card-6"] },
  ];

  // Handle drag and drop reordering
  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // Check if the drag is outside a valid drop target
    if (!destination) {
      return;
    }

    // Check if the position of the card has changed
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Reorder the cards within the same column
    const column = columns.find((col) => col.id === source.droppableId);
    const newCardIds = Array.from(column.cardIds);
    newCardIds.splice(source.index, 1);
    newCardIds.splice(destination.index, 0, draggableId);

    // Update the column with the new card order
    const updatedColumn = {
      ...column,
      cardIds: newCardIds,
    };

    // Update the state with the new column order
    const updatedColumns = columns.map((col) =>
      col.id === updatedColumn.id ? updatedColumn : col
    );

    // Update the state with the new column order
    // (You can store it in a state management library like Redux)
    console.log(updatedColumns);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {columns.map((column) => (
        <Droppable droppableId={column.id} key={column.id}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="column"
            >
              <h3>{column.title}</h3>
              {column.cardIds.map((cardId, index) => (
                <Draggable key={cardId} draggableId={cardId} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="card"
                    >
                      {/* Render card content */}
                      Card {cardId}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
}

export default KanbanBoard;
