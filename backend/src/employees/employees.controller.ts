import { Controller, Get, Post, Put, Delete, Param, Body, Req } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './employee.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request, Response } from 'express';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

@UseGuards(JwtAuthGuard)
@Get()
async getEmployees(@Req() req: Request) {
  console.log('User:', req.user); // Ensure this logs the authenticated user
  return this.employeesService.findAll();
}

  @Get()
  findAll(): Promise<Employee[]> {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Employee> {
    return this.employeesService.findOne(id);
  }

  @Post()
  create(@Body() employee: Employee): Promise<Employee> {
    return this.employeesService.create(employee);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<Employee>,
  ): Promise<Employee> {
    return this.employeesService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.employeesService.remove(id);
  }
}
