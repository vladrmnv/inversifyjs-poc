import 'reflect-metadata';
import { DiPocApplication } from './application';

async function main() {
 const app = new DiPocApplication();
 await app.start();
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
