import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string[] {
    const result = [];
  
    for (let i = 0; i < 300000; i++) {
      result.push({id: i, name: 'name' + i});
    }

    return result;
  }
}
