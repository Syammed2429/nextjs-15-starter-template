"use client";
import Link from "next/link";
import * as React from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { BlocksIcon, AlignJustify } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Marketing Page",
    href: "/marketing-page",
    description: "Write some wavy here to get them to click.",
  },
  {
    title: "About Us",
    href: "/about-us",
    description: "Write some wavy here to get them to click.",
  },
];

export default function NavBar() {
  return (
    <div className="flex min-w-full fixed justify-between py-3 px-6 border-b z-10 dark:bg-black dark:bg-opacity-50 bg-white">
      <div className="flex justify-between w-full min-[825px]:hidden">
        <Sheet>
          <SheetTrigger className="p-2 transition">
            <Button
              size="icon"
              variant="ghost"
              className="w-4 h-4"
              aria-label="Open menu"
              asChild
            >
              <AlignJustify />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Next Starter</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem]">
              <SheetClose asChild>
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    Home
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/dashboard"
                  legacyBehavior
                  passHref
                  className="cursor-pointer"
                >
                  <Button variant="outline">Dashboard</Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="max-[825px]:hidden flex gap-3 w-[100%] justify-between">
          <Link href="/" className="pl-2 flex items-center" aria-label="Home">
            <BlocksIcon aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem className="max-[825px]:hidden ml-5">
            <NavigationMenuTrigger className="dark:bg-black dark:bg-opacity-50">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col w-[400px] gap-3 p-4 lg:w-[500px]">
                {components.map((component, index) => (
                  <ListItem
                    key={index}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="max-[825px]:hidden">
            <Link href="/dashboard" legacyBehavior passHref>
              <Button variant="ghost">Dashboard</Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";