/**
 * DataTable 컴포넌트
 *
 * ShadcnUI Table을 활용한 데이터 테이블 예제입니다.
 */

"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
}

const sampleData: User[] = [
  {
    id: 1,
    name: "홍길동",
    email: "hong@example.com",
    role: "관리자",
    status: "active",
  },
  {
    id: 2,
    name: "김철수",
    email: "kim@example.com",
    role: "사용자",
    status: "active",
  },
  {
    id: 3,
    name: "이영희",
    email: "lee@example.com",
    role: "사용자",
    status: "inactive",
  },
  {
    id: 4,
    name: "박민수",
    email: "park@example.com",
    role: "편집자",
    status: "active",
  },
  {
    id: 5,
    name: "정수진",
    email: "jung@example.com",
    role: "사용자",
    status: "inactive",
  },
];

export function DataTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>이름</TableHead>
            <TableHead>이메일</TableHead>
            <TableHead>역할</TableHead>
            <TableHead>상태</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Badge
                  variant={user.status === "active" ? "default" : "secondary"}
                >
                  {user.status === "active" ? "활성" : "비활성"}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
