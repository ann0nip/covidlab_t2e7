import * as React from "react";
import styled from "styled-components/native";
import IconF from "react-native-vector-icons/Feather";
import IconM from "react-native-vector-icons/MaterialIcons";
import { ReminderBadge } from "./ReminderBadge";

export const TaskCard = ({ title, body, isDone }) => (
  <Container isDone={isDone}>
    <HeaderContainer>
      <TaskTitle adjustsFontSizeToFit numberOfLines={1}>
        {title}
      </TaskTitle>
      {!isDone && (
        <TaskEditButton
          name="edit"
          size={32}
          color="#046E8F"
          onPress={isDone => editTaskClicked(isDone)}
        />
      )}
    </HeaderContainer>
    <TaskTitleLine></TaskTitleLine>
    <TaskBody>
      <TaskBodyText adjustsFontSizeToFit numberOfLines={3}>
        {body}
      </TaskBodyText>
    </TaskBody>
    <TaskFooter></TaskFooter>
    {isDone && (
      <DoneIconPlaceholder
        show={!isDone}
        name="done"
        size={150}
        color="white"
      />
    )}
  </Container>
);

function editTaskClicked(isDone) {
  console.log("Edit task clicked");
  isDone = !isDone;
}

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  align-self: center;
  border: 2px solid #046e8f;
  border-radius: 20px;
  min-height: 150px;
  width: 90%;
  margin-bottom: 3%;
  padding: 7px;
  opacity: ${({ isDone }) => (isDone ? "0.4" : "1")};
  background-color: ${({ isDone }) => (isDone ? "#046E8F" : "white")};
`;

const DoneIconPlaceholder = styled(IconM)`
  position: absolute;
  align-self: center;
  justify-content: center;
`;

const HeaderContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  min-height: 40px;
  align-self: flex-start;
`;

const TaskTitle = styled.Text`
  color: #046e8f;
  width: 80%;
  font-size: 30px;
  padding-left: 10px;
  max-width: 80%;
  flex-wrap: wrap;
`;

const TaskEditButton = styled(IconF)`
  align-self: flex-start;
  justify-content: center;
  margin-bottom: 0px;
`;

const TaskTitleLine = styled.View`
  background-color: #046e8f;
  height: 1.5px;
  margin-top: 4px;
  margin-left: 10px;
  margin-right: 10px;
`;

const TaskBody = styled.View`
  width: 100%;
  margin-top: 7px;
  padding-left: 10px;
`;

const TaskBodyText = styled.Text`
  color: #046e8f;
  width: 100%;
  font-size: 20px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 3px;
  flex-wrap: wrap;
  max-height: 100%;
`;

const TaskFooter = styled.View`
  align-self: flex-end;
`;
