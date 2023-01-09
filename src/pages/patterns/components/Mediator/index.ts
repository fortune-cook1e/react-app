class ChatRoom {
  logMessage(user: User, msg: string) {
    const time = Date.now()
    const sender = user.getName()
    console.log(`time:${time},sender:${sender}:${msg}`)
  }
}

class User {
  name: string
  chatRoom: ChatRoom

  constructor(name: string, chatRoom: ChatRoom) {
    this.name = name
    this.chatRoom = chatRoom
  }

  getName(): string {
    return this.name
  }

  send(message: string): void {
    this.chatRoom.logMessage(this, message)
  }
}

const chatroom = new ChatRoom()

const user1 = new User('John Doe', chatroom)
const user2 = new User('Jane Doe', chatroom)

user1.send('Hi there!')
user2.send('Hey!')

export default User
