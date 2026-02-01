"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { mainNavigation, getNavigationByVisibility } from "@/lib/navigation-item";
import { Heart, Menu, Search, ShoppingBag } from "lucide-react";

export function Header() {
    // const { itemCount } = useCart();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <span className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground">
                            No Meio de Nós
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {getNavigationByVisibility(mainNavigation, "desktop").map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noopener noreferrer" : undefined}
                                title={item.description}
                            >
                                {item.icon && <item.icon className="inline-block mr-2 h-4 w-4" />}
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <Link href="/products">
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                                <Search className="h-5 w-5" />
                                <span className="sr-only">Search products</span>
                            </Button>
                        </Link>
                        <Link href="/cart" className="relative">
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                                <ShoppingBag className="h-5 w-5" />
                                <span className="sr-only">Shopping bag</span>
                                {/* {itemCount > 0 && (
                                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                                        {itemCount}
                                    </span>
                                )} */}
                            </Button>
                        </Link>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-muted-foreground hover:text-foreground"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <Menu />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-border">
                        <div className="flex flex-col gap-4">
                            {getNavigationByVisibility(mainNavigation, "mobile").map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                    target={item.external ? "_blank" : undefined}
                                    rel={item.external ? "noopener noreferrer" : undefined}
                                    title={item.description}
                                >
                                    {item.icon && <item.icon className="inline-block mr-2 h-5 w-5" />}
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
