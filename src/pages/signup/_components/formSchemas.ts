import { z } from "zod";
import { zfd } from "zod-form-data";

export const accountDetailsSchema = zfd
  .formData({
    email: zfd.text(z.string().email()),
    password: zfd.text(
      z.string().min(3, "Passwords must be at least 3 characters long.")
    ),
    confirmPassword: zfd.text(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords must match.",
    path: ["confirmPassword"],
  });
