// Step 1: import ActivityIndicator
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export default function RoomScreen() {
  // ...

  // Step 2: add a helper method

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#6646ee' />
      </View>
    );
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{ _id: 1, name: 'User Test' }}
      renderBubble={renderBubble}
      placeholder='Type your message here...'
      showUserAvatar
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottomComponent={scrollToBottomComponent}
      // Step 3: add the prop
      renderLoading={renderLoading}
    />
  );
}

// Step 4: add corresponding styles
const styles = StyleSheet.create({
  // rest remains same
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});