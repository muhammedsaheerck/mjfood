import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UtilService } from '../../services/util.service';
import { freeSet } from '@coreui/icons/js/free';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  @ViewChild('scrollMe', { static: false })
  private myScrollContainer: ElementRef;
  @ViewChildren('messages') messagesList: QueryList<any>;
  users: any[] = [];
  dummy: any[] = [];
  dummyList = Array(5);
  id: any;
  message: any;
  messages: any[] = [];
  selectedId: any;
  name: any;
  avtar: any;
  type: any;
  interval: any;
  uid: any;
  roomId: any = '';
  icons = freeSet;
  @HostListener('window:beforeunload')
  canDeactivate(): any {
    console.log('ok');
  }
  constructor(public util: UtilService, public api: ApiService) {
    this.uid = parseInt(localStorage.getItem('uid') || '0');
    this.getList();
    this.util.successEject().subscribe(() => {
      clearInterval(this.interval);
    });
  }

  getList() {
    this.users = [];
    this.dummy = [];
    this.getChatList();
  }

  getChatList() {
    this.dummyList = Array(5);
    this.api
      .post_private('v1/chats/getChatListBUid', { id: this.uid })
      .then(
        (data: any) => {
          console.log(data);
          this.dummyList = [];
          if (data && data.status && data.data && data.data.length) {
            this.users = data.data;
          }
        },
        (error) => {
          console.log(error);
          this.dummyList = [];
          this.util.apiErrorHandler(error);
        }
      )
      .catch((error) => {
        console.log(error);
        this.dummyList = [];
        this.util.apiErrorHandler(error);
      });
  }

  ngOnInit(): void {}

  search(str: any) {
    console.log(str);
  }

  getChatRooms() {
    const param = {
      sender_id: this.uid,
      receiver_id: this.id,
    };
    this.api
      .post_private('v1/chats/getChatRooms', param)
      .then(
        (data: any) => {
          console.log(data);
          if (data && data.status && data.status == 200) {
            if (data && data.data && data.data.id) {
              this.roomId = data.data.id;
            } else if (data && data.data2 && data.data2.id) {
              this.roomId = data.data2.id;
            }
            this.getMessageList();
            this.interval = setInterval(() => {
              console.log('calling in interval');
              this.getMessageList();
            }, 12000);
          } else {
            this.createChatRooms();
          }
        },
        (error) => {
          console.log('error', error);
          this.createChatRooms();
        }
      )
      .catch((error) => {
        this.createChatRooms();
        console.log('error', error);
      });
  }

  createChatRooms() {
    const param = {
      sender_id: this.uid,
      receiver_id: this.id,
      status: 1,
    };
    this.api
      .post_private('v1/chats/createChatRooms', param)
      .then(
        (data: any) => {
          console.log(data);

          if (data && data.status && data.status == 200 && data.data) {
            this.roomId = data.data.id;
            this.getMessageList();
            this.interval = setInterval(() => {
              console.log('calling in interval');
              this.getMessageList();
            }, 12000);
          }
        },
        (error) => {
          console.log('error', error);
        }
      )
      .catch((error) => {
        console.log('error', error);
      });
  }

  chatUser(id: any, type: any, userName: any) {
    console.log(id, type, userName);
    this.id = id;
    this.name = userName;
    this.getChatRooms();
  }

  getMessageList() {
    this.api
      .post_private('v1/chats/getById', { room_id: this.roomId })
      .then(
        (data: any) => {
          console.log(data);
          if (data && data.status && data.status == 200 && data.data.length) {
            this.messages = data.data;
          }
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((error) => {
        console.log(error);
      });
  }

  send() {
    console.log(this.message);
    if (!this.message || this.message == '') {
      return false;
    }
    const msg = this.message;
    this.message = '';
    const param = {
      room_id: this.roomId,
      uid: this.uid,
      sender_id: this.uid,
      message: msg,
      message_type: 0,
      status: 1,
      reported: 0,
    };

    this.api.post_private('v1/chats/sendMessage', param).then(
      (data: any) => {
        console.log(data);
        if (data && data.status == 200) {
          this.getMessageList();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
