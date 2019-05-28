import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from 'react-native-button';

import Message from './Message';
import Loading from './Loading';

const WEBHOOK = 'Webhook_URL';
const SLACK_MESSAGE = '<!channel> खाना पाक्यो, सबै जना आउनुहोस है';

export default class Home extends React.Component {
  state = {
    loading: false,
    apiCall: ''
  };

  resetApiCall = () => this.setState({ apiCall: '' });

  setLoading = (isLoading = true) => this.setState({loading: isLoading});

  onPress = async () => {
    this.resetApiCall();
    this.setLoading();
    await fetch(WEBHOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: SLACK_MESSAGE
      })
    }).then(response => {
      if (response.ok) {
        this.setState({ apiCall: 'success' });
      } else {
        this.setState({ apiCall: 'error' });
      }
    })
      .catch(e => this.setState({ apiCall: 'error' }));
    this.setLoading(false);
    setTimeout(this.resetApiCall, 15 * 1000);
  };

  render() {
    const { apiCall, loading } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <Loading isLoading={loading} />
          <Button
            style={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={this.onPress}>
            खाना पाक्यो
          </Button>
          {apiCall ? <Message type={apiCall} /> : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#673AB7',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 24,
    paddingLeft: 24,
    borderRadius: 4
  },
  button: {
    color: '#fff',
    fontSize: 22
  }
});
