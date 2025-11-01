import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() // GET /users or /users?role=value&age=value {<- query parameters}
  findAll(@Query('role') role?: string, @Query('age') age?: number) {
    return [];
  }

  @Get('interns') // static route should be before dynamic route
  findInterns() {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: any) {
    return user;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: any) {
    return { id };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { id };
  }
}
