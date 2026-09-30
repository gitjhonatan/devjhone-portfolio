"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  contactSchema,
  type ContactEmailData,
} from "@/lib/validations/contact";
import { useTranslations } from "next-intl";

const initialFormData: ContactEmailData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const info = [
  {
    icon: <FaPhoneAlt />,
    key: "phone",
  },
  {
    icon: <FaEnvelope />,
    key: "email",
  },
  {
    icon: <FaMapMarkedAlt />,
    key: "location",
  },
];

type FormErrors = Partial<Record<keyof ContactEmailData, string>>;

const Contact = () => {
  const [formData, setFormData] = useState<ContactEmailData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const t = useTranslations("ContactPage");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
    }));

    setStatus("idle");
  };

  const handlePhoneChange = (phone: string | undefined) => {
    setFormData((previous) => ({
      ...previous,
      phone: phone ?? "",
    }));

    setErrors((previous) => ({
      ...previous,
      phone: undefined,
    }));

    setStatus("idle");
  };

  const handleSubjectChange = (subject: string) => {
    setFormData((previous) => ({
      ...previous,
      subject,
    }));

    setErrors((previous) => ({
      ...previous,
      subject: undefined,
    }));

    setStatus("idle");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("idle");

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      setErrors({
        firstName: fieldErrors.firstName?.[0],
        lastName: fieldErrors.lastName?.[0],
        email: fieldErrors.email?.[0],
        phone: fieldErrors.phone?.[0],
        subject: fieldErrors.subject?.[0],
        message: fieldErrors.message?.[0],
      });

      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setFormData(initialFormData);
      setStatus("success");
    } catch (error) {
      console.error("[Contact Form] Failed to send message:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          <div className="order-2 xl:order-none xl:h-[54%]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10"
            >
              <h3 className="text-4xl text-accent">{t("title")}</h3>

              <p className="text-white/60">{t("description")}</p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <Input
                    className="w-full"
                    type="text"
                    name="firstName"
                    placeholder={t("form.firstName.placeholder")}
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />

                  {errors.firstName && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    className="w-full"
                    type="text"
                    name="lastName"
                    placeholder={t("form.lastName.placeholder")}
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />

                  {errors.lastName && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    className="w-full"
                    type="email"
                    name="email"
                    placeholder={t("form.email.placeholder")}
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />

                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <PhoneInput
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder={t("form.phone.placeholder")}
                  />

                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <Select
                  value={formData.subject}
                  onValueChange={handleSubjectChange}
                  disabled={isSubmitting}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t("form.subject.placeholder")} />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="job-opportunity">
                      {t("form.subject.options.jobOpportunity")}
                    </SelectItem>

                    <SelectItem value="freelance-project">
                      {t("form.subject.options.freelanceProject")}
                    </SelectItem>

                    <SelectItem value="general-inquiry">
                      {t("form.subject.options.generalInquiry")}
                    </SelectItem>

                    <SelectItem value="other">
                      {t("form.subject.options.other")}
                    </SelectItem>
                  </SelectContent>
                </Select>

                {errors.subject && (
                  <p className="mt-2 text-sm text-red-400">{errors.subject}</p>
                )}
              </div>

              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  className="h-[200px]"
                  placeholder={t("form.message.placeholder")}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                />

                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              <Button
                size="lg"
                className="max-w-44 bg-accent text-primary"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? t("form.sending") : t("form.submit")}
              </Button>

              {status === "success" && (
                <p className="text-green-400">{t("status.success")}</p>
              )}

              {status === "error" && (
                <p className="text-red-400">{t("status.error")}</p>
              )}
            </form>
          </div>

          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:justify-end xl:mb-0 self-start">
              <ul className="flex flex-col gap-10 w-[calc(100vw-64px)] sm:w-max">

              {info.map((item) => (
                <li key={item.key} className="flex items-center gap-6">
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-md bg-[#27272c] text-accent xl:h-[72px] xl:w-[72px]">
                    <div className="text-[20px]">{item.icon}</div>
                  </div>

                  <div className="flex-1">
                    <p className="text-white/60">
                      {t(`info.${item.key}.title`)}
                    </p>

                    <h3 className="text-xl break-all">
                      {t(`info.${item.key}.description`)}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
