import * as React from "react";
import styled from "styled-components/native";
import { TaskCard } from "./TaskCard";
import { AddNewTaskCard } from "./AddNewTaskCard";
import { LinearGradient } from "expo-linear-gradient";

export const TaskList = props => {
  const longPress = taskData => {
    console.log("clicked: ", taskData.done);
    props.setTaskDone(taskData.id, !taskData.done);
  };

  const addTaskClicked = () => {
    console.log("Task add clicked.");
  };

  return (
    <GradientTop colors={["white", "#38AECC"]} start={[0, 0.1]}>
      <Container bounces={true} bouncesZoom>
        {props.tasks.map(taskData => (
          <TaskCardContainer
            key={taskData.id}
            delayPressIn={300}
            onLongPress={() => longPress(taskData)}
          >
            <TaskCardStyled
              key={taskData.id}
              title={taskData.title ? taskData.title : "Default task title"}
              body={
                taskData.body
                  ? taskData.body
                  : "Default task body text here just for mock. This is used as quick description"
              }
              isDone={taskData.done}
            ></TaskCardStyled>
          </TaskCardContainer>
        ))}
        <AddNewTaskCard onPress={() => addTaskClicked()}></AddNewTaskCard>
      </Container>
    </GradientTop>
  );
};

const Container = styled.ScrollView`
  padding-top: 10px;
  flex: 1;
`;

const GradientTop = styled(LinearGradient)`
  flex: 1;
`;

const TaskCardContainer = styled.TouchableOpacity`
  margin-bottom: 3%;
  min-height: 150px;
`;

const TaskCardStyled = styled(TaskCard)``;
