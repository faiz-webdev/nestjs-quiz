import { Controller, Post } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ApiTags } from '@nestjs/swagger';
import { events } from 'src/common/constants/event.constants';
import { ResponseAddEvent } from '../events/response-add.event';

@ApiTags('Response')
@Controller('/response')
export class ResponseController {
  constructor(private eventEmitter: EventEmitter2) {}

  @Post('')
  async handleQuestionResponse() {
    const payload = new ResponseAddEvent();
    payload.optionId = 1;
    (payload.userId = 4),
      this.eventEmitter.emit(events.RESPONSE_SUBMITTED, payload);

    return { message: 'dsds' };
  }
}
