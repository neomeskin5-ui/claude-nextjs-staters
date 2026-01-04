/**
 * Contact Form 검증 스키마
 *
 * Zod를 사용한 문의 폼 유효성 검증 스키마입니다.
 */

import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "이름은 최소 2자 이상이어야 합니다." })
    .max(50, { message: "이름은 최대 50자까지 가능합니다." }),
  email: z.string().email({ message: "올바른 이메일 주소를 입력해주세요." }),
  subject: z
    .string()
    .min(5, { message: "제목은 최소 5자 이상이어야 합니다." })
    .max(100, { message: "제목은 최대 100자까지 가능합니다." }),
  message: z
    .string()
    .min(10, { message: "메시지는 최소 10자 이상이어야 합니다." })
    .max(1000, { message: "메시지는 최대 1000자까지 가능합니다." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
