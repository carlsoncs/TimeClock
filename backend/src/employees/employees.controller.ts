import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './employee.entity';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  findAll(): Promise<Employee[]> {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Employee> {
    return this.employeesService.findOne(+id);
  }

  @Post()
  create(@Body() employee: Employee): Promise<Employee> {
    return this.employeesService.create(employee);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.employeesService.remove(+id);
  }
}
