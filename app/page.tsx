"use client";

// app/page.tsx
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { getVersion } from "@tauri-apps/api/app";

export default function Page() {
  const [appVersion, setTauriVersion] = useState("");
  useLayoutEffect(() => {
    const fetchVersion = async () => {
      try {
        const version = await getVersion();
        setTauriVersion(version);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVersion();
  }, []);
  return (
    <>
      <Navbar isBordered>
        <NavbarContent justify="start">
          <NavbarBrand>
            <a href="/" className="text-lg">
              <span className="font-bold text-slate-800">Skylauncher</span>
              <span className="text-slate-500">-for-mc</span>
            </a>
          </NavbarBrand>
          <NavbarContent className="hidden gap-3 sm:flex">
            <NavbarItem>
              <Link color="foreground" href="#">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page" color="secondary">
                Custom
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Settings
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            type="search"
          />
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">test@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
      <div className="fixed bottom-0 left-0 right-0 border-t-1 p-4 text-center">
        v{appVersion}
      </div>
    </>
  );
}
