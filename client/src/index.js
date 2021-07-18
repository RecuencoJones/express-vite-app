import { createApp } from 'vue';

const app = createApp({});

app.mount('#root');

fetch('/hello');

fetch('/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'user',
    password: 'pass'
  })
})
.then(() => fetch('/restricted'));