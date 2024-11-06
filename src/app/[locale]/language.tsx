"use client";
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useParams, usePathname, useRouter } from "next/navigation";
import { languageData } from "../languageData";

type LanguageType = {
  id: string;
  name: string;
  avatar: string;
};

export default function Language() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const locale = params.locale?.toString();

  const [selectedValue, setSelectedValue] = useState(
    locale == "vi"
      ? t("Layout.vi")
      : locale == "en"
      ? t("Layout.en")
      : t("Layout.vi")
  );

  const [selectedKeys, setSelectedKeys] = useState(new Set([locale]));

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize">
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={Array.from(selectedKeys).filter(
            (key) => key !== undefined
          )}
          onSelectionChange={() => setSelectedKeys}
        >
          {languageData.map((language: LanguageType) => (
            <DropdownItem
              onClick={() => {
                router.push("/" + language.id + pathname.slice(3));
                setSelectedValue(language.name);
              }}
              key={language.id}
            >
              {language.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
