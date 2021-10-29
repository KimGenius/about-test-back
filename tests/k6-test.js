import http from 'k6/http';
import { sleep } from 'k6';

function generateRandString() {
  return Math.random().toString(36).substr(2, 3)
}

export default function () {
  http.get(`http://localhost:5000/boards/${generateRandString()}`);
}
