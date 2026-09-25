"use client";

import * as React from "react";
import ReactPhoneInput, { type Country } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { cn } from "@/lib/utils";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CountryOption = {
  value: Country;
  label: string;
};

type CountrySelectProps = {
  value?: Country;
  onChange: (country: Country) => void;
  options: CountryOption[];
};

const CountrySelect = ({ value, onChange, options }: CountrySelectProps) => {
  return (
    <Select
      value={value}
      onValueChange={(country) => onChange(country as Country)}
    >
      <SelectTrigger
        className={cn(
          "h-[46px] w-auto min-w-[70px]",
          "rounded-r-none border-r-0",
          "focus:border-accent",
        )}
      >
        <SelectValue>{value && <span>{getFlagEmoji(value)}</span>}</SelectValue>
      </SelectTrigger>

      <SelectContent>
        {options.map(({ value: country, label }, index) => {
          return (
            <SelectItem key={`${index}-${country}`} value={country}>
              {getFlagEmoji(country)} {label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

const getFlagEmoji = (country: Country) => {
  return country
    ?.toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
};

type PhoneInputProps = {
  value?: string;
  onChange?: (value?: string) => void;
  placeholder?: string;
  className?: string;
};

const PhoneInput = ({
  value,
  onChange = () => {},
  placeholder = "Phone number",
  className,
}: PhoneInputProps) => {
  return (
    <ReactPhoneInput
      international
      defaultCountry="BR"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      countrySelectComponent={CountrySelect}
      className={cn(
        "flex h-[48px] w-full",
        "rounded-md border border-white/10 bg-primary",
        "focus-within:border-accent",
        className,
      )}
      numberInputProps={{
        className:
          "w-full bg-transparent pl-0 pr-4 text-base text-white outline-none placeholder:text-white/60",
      }}
    />
  );
};

PhoneInput.displayName = "PhoneInput";

export { PhoneInput };
