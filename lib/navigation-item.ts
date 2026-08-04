import { LucideIcon } from "lucide-react";

/**
 * Navigation Item Interface
 * Defines the structure for navigation links across the application
 */
export interface NavigationItem {
    /** Unique identifier for the navigation item */
    id: string;
    /** Display label for the navigation link */
    label: string;
    /** URL path or route */
    href: string;
    /** Optional icon component (Lucide React) */
    icon?: LucideIcon;
    /** Optional description for tooltips or accessibility */
    description?: string;
    /** Whether this item should be highlighted/featured */
    featured?: boolean;
    /** Sub-navigation items for dropdown menus */
    children?: NavigationItem[];
    /** Whether this link opens in a new tab */
    external?: boolean;
    /** Show only on specific breakpoints */
    showOn?: "mobile" | "desktop" | "both";
}

/**
 * Main Navigation Items
 * Source of truth for all navigation links in the application
 */
export const mainNavigation: NavigationItem[] = [
    {
        id: "home",
        label: "Inicio",
        href: "/",
        description: "Ir para a página inicial",
        showOn: "both",
    },
    {
        id: "shop",
        label: "Loja",
        href: "/products",
        description: "Navegue por produtos de crochet feitos à mão",
        featured: true,
        showOn: "both",
    },
    {
        id: "about",
        label: "Sobre",
        href: "/about",
        description: "Saiba mais sobre nossa história",
        showOn: "both",
    },
];

/**
 * Footer Navigation Items
 * Can include additional links not shown in main navigation
 */
export const footerNavigation: NavigationItem[] = [
    {
        id: "contact",
        label: "Contacto",
        href: "/contact",
        description: "Entre em contacto connosco",
    },
    {
        id: "faq",
        label: "FAQ",
        href: "/faq",
        description: "Perguntas frequentes",
    },
    {
        id: "shipping",
        label: "Informações de Envio",
        href: "/shipping",
        description: "Políticas de envio e devolução",
    },
    {
        id: "care",
        label: "Instruções de Cuidado",
        href: "/care",
        description: "Como cuidar dos seus itens de crochet",
    },
];


/**
 * Social Media Links
 */
export const socialNavigation: NavigationItem[] = [
    {
        id: "instagram",
        label: "Instagram",
        href: "https://instagram.com/nomeiodenos",
        external: true,
    },
    {
        id: "facebook",
        label: "Facebook",
        href: "https://facebook.com/nomeiodenos",
        external: true,
    },
];

/**
 * User Account Navigation
 * Links for logged-in users
 */
export const accountNavigation: NavigationItem[] = [
    {
        id: "profile",
        label: "Perfil",
        href: "/account/profile",
        description: "Gerir o seu perfil",
    },
    {
        id: "orders",
        label: "Encomendas",
        href: "/account/orders",
        description: "Ver o seu histórico de encomendas",
    },
    {
        id: "wishlist",
        label: "Lista de Desejos",
        href: "/account/wishlist",
        description: "Os seus itens guardados",
    },
    {
        id: "settings",
        label: "Definições",
        href: "/account/settings",
        description: "Definições da conta",
    },
];

/**
 * Helper function to get navigation items by visibility
 */
export function getNavigationByVisibility(
    items: NavigationItem[],
    visibility: "mobile" | "desktop" | "both"
): NavigationItem[] {
    return items.filter(
        (item) => item.showOn === visibility || item.showOn === "both" || !item.showOn
    );
}

/**
 * Helper function to get featured navigation items
 */
export function getFeaturedNavigation(
    items: NavigationItem[]
): NavigationItem[] {
    return items.filter((item) => item.featured);
}

