import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This is working properly';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action find #${id} coffee`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}