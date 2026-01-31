import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AnalysticsLayout({
    children
}: {
    children: React.ReactNode
}) {

    return (
        <div>
            <div>
                <Button asChild><Link href="/dashboard/analystics/weekly">Weekly</Link></Button>
                <Button asChild><Link href="/dashboard/analystics/monthly">Monthly</Link></Button>
            </div>
            {children}
            
        </div>
    );
}

