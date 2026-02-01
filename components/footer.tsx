import Link from "next/link";
import { footerNavigation, socialNavigation } from "@/lib/navigation-item";

export function Footer() {
    return (
        <footer className="bg-card border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-semibold tracking-tight text-foreground">
                                No Meio de Nós
                            </span>
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                            🧶 Peças únicas em crochê <br />
                            📍 Entregas em mão em Coimbra
                        </p>
                    </div>



                    {/* Support */}
                    <div>
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                            Suporte
                        </h3>
                        <ul className="space-y-1">
                            {footerNavigation.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        title={item.description}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                            Social
                        </h3>
                        <ul className="space-y-1">
                            {socialNavigation.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        title={item.description}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                        &copy; {new Date().getFullYear()} No Meio de Nós. Todos os direitos reservados. Made with care.
                    </p>
                </div>
            </div>
        </footer >
    );
}
