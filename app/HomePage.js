import React, { Component } from "react";
import styled from "styled-components/native";
import { TaskList } from "./task-view/TaskList";
import Icon from "react-native-vector-icons/MaterialIcons";
import Moment from "moment";
import SwipeablePanel from "rn-swipeable-panel";

export default class HomePage extends Component {
  state = {
    swipeablePanelActive: false,
    tasks: defaultTasks
  };

  openPanel = () => {
    console.log("TODO");
    this.setState({ swipeablePanelActive: true });
  };

  closePanel = () => {
    this.setState({ swipeablePanelActive: false });
  };

  getDoneTasksCount = () =>
    this.state.tasks.filter(t => t.done === true).length;

  getSortedTasks = () =>
    this.state.tasks.sort((a, b) => {
      if (a.done) return 1;
      else return -1;
    });

  setTaskDone = (taskId, done) => {
    this.setState(state => ({
      ...state,
      tasks: state.tasks.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            done: done
          };
        }
        return task;
      })
    }));
  };

  render() {
    const { tasks } = this.state;

    var currentDate = Moment(new Date()).format("DD-MM-YYYY");
    return (
      <Container>
        <Title> Habitos COVID</Title>
        <DateBar>
          <DateText onPress={this.openPanel}>{currentDate} </DateText>
          <RightBarContainer>
            <CounterBadge onPress={() => showOnlyTodoClicked()}>
              {this.getDoneTasksCount() + "/" + tasks.length}
            </CounterBadge>
          </RightBarContainer>
        </DateBar>
        <TaskList
          tasks={this.getSortedTasks()}
          setTaskDone={this.setTaskDone}
        />
        <SwipeablePanel
          isActive={this.state.swipeablePanelActive}
          onClose={this.closePanel}
        />
        {/* <Footer /> */}
      </Container>
    );
  }
}

function showOnlyTodoClicked() {
  console.log("Show only todo clicked");
}

const Container = styled.SafeAreaView`
  background-color: white;
  justify-content: flex-start;
  margin-top: 20px;
  flex: 1;
  display: flex;
`;

const DateBar = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding-top: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 5px;
  /*shortcut: padding: 5px 20px; */
`;

const DateText = styled.Text`
  color: #022f40;
  font-size: 20px;
`;

const RightBarContainer = styled.View`
  flex-direction: row;
`;

const CheckIcon = styled(Icon)`
  margin-right: 20px;
  justify-content: flex-start;
`;

const CounterBadge = styled.Text`
  font-size: 15px;
  font-weight: 900;
  background-color: white;
  justify-content: center;
  align-self: center;
  color: #022f40;
  padding: 5px;
  padding-left: 12px;
  padding-right: 8px;
  border: 1.6px #022f40;
  border-radius: 15px;
`;

const Title = styled.Text`
  font-size: 35px;
  color: #022f40;
  margin-top: 20px;
`;

// const Footer = styled.View`
//   height: 100px;
// `;

const defaultTasks = [
  {
    id: 1,
    title: "🤲🏻 🧼",
    body: "Ya te lavaste las manos? 🤔",
    done: false
  },
  {
    id: 2,
    title: "📱 🧼",
    body:
      "Es momento de desinsfectar tu movil 😀. Y no, no se trata de eliminar el numero de tu ex.",
    done: false
  },
  {
    id: 3,
    title: "🚪 Y 🔑",
    body: "Puertas y llaves limpias? 🤔",
    done: true
  }
];
