import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { EmployeesService } from '../employees/employees.service';
import { Employee } from '../employees/employee.entity';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const employeesService = app.get(EmployeesService);
const testEmployees: Partial<Employee>[] = [
    { id: 1, name: 'John Doe', badgeId: '12345', role: 'Developer' },
    { id: 2, name: 'Jane Smith', badgeId: '12346', role: 'Designer' },
    { id: 3, name: 'Alice Johnson', badgeId: '12347', role: 'Manager' },
    { id: 4, name: 'Bob Brown', badgeId: '12348', role: 'Developer' },
    { id: 5, name: 'Charlie Davis', badgeId: '12349', role: 'Tester' },
    { id: 6, name: 'Diana Evans', badgeId: '12350', role: 'Developer' },
    { id: 7, name: 'Eve Foster', badgeId: '12351', role: 'Designer' },
    { id: 8, name: 'Frank Green', badgeId: '12352', role: 'Manager' },
    { id: 9, name: 'Grace Harris', badgeId: '12353', role: 'Tester' },
    { id: 10, name: 'Hank Irving', badgeId: '12354', role: 'Developer' },
];


  for (const employee of testEmployees) {
    await employeesService.create(employee as Employee);
  }

  await app.close();
}

bootstrap();