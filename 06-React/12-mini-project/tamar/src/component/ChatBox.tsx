import { StreamChat, User } from 'stream-chat';
import {
    Chat,
    Channel,
    ChannelHeader,
    MessageInput,
    MessageList,
    Thread,
    Window,
} from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

const userId = 'broken-lake-3';
const userName = 'broken';

const user: User = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?id=${userId}&name=${userName}`,
};

const apiKey = 'dz5f4d5kzrue';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYnJva2VuLWxha2UtMyIsImV4cCI6MTcwMzAxMTE3Mn0.w8zCUbImKzFHDBn8svDAt-1U3Y2YQbzyISS9DUSEtNQ';

const chatClient = new StreamChat(apiKey);
chatClient.connectUser(user, userToken);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
    // add as many custom fields as you'd like
    image: 'https://www.drupal.org/files/project-images/react.png',
    name: 'Talk about React',
    members: [userId],
});

const ChatBox = () => (
    <Chat client={chatClient} theme='str-chat__theme-light'>
        <Channel channel={channel}>
            <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput />
            </Window>
            <Thread />
        </Channel>
    </Chat>
);

export default ChatBox;
