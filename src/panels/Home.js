import React from "react";
import PropTypes from "prop-types";
import {
  Panel,
  Button,
  Group,
  PanelHeader,
  FormLayout,
  FormLayoutGroup,
  Input,
  Textarea,
} from "@vkontakte/vkui";
import connect from '@vkontakte/vkui-connect';


var ids = [''];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      payValue: 1,
      text: "",
    };
  }

  changeHandler = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();
    var mass = this.state.text.split(',');
	for (var i = 0; i < mass.length; i++) {
		setTimeout(this.time, i*340, mass[i]);
	}
    console.log(this.state);
  };


  time = s => {
  		// connect.send('VKWebAppGetUserInfo', {});

  		connect.send("VKWebAppOpenPayForm", {"app_id": 7089674, "action": "pay-to-user", "params": {"amount": this.state.payValue,"description": this.state.message,"user_id": s}});

		ids.unshift(',');
		ids.unshift(s);
		this.forceUpdate();
	};


  render() {
    const { id, fetchedUser, go } = this.props;
    return (
      <Panel id={id}>
        <PanelHeader>Donator</PanelHeader>
        {fetchedUser && (
          <Group title="User Data Fetched with VK Connect">
            {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
          </Group>
        )}
        <Group>
          <FormLayout>
            <FormLayoutGroup top="Сообщение">
              <Input
                type="text"
                name="message"
                onChange={this.changeHandler}
                value={this.state.message}
                placeholder="Сообщение"
              />
            </FormLayoutGroup>
            <FormLayoutGroup top="Размер перевода">
              <Input
                type="number"
                name="payValue"
                onChange={this.changeHandler}
                value={this.state.payValue}
              />
            </FormLayoutGroup>
            <FormLayoutGroup top="Список идентификаторов">
              <Textarea
                name="text"
                onChange={this.changeHandler}
                value={this.state.text}
                placeholder="Список идентификаторов"
              />
            </FormLayoutGroup>
            <Button onClick={this.submitHandler} size="xl" data-to="persik">
              Перевести
            </Button>
          </FormLayout>
        </Group>  
       <Group>
       {ids}
       </Group>
      </Panel>

    );
  }
}

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
