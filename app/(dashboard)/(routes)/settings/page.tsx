import { Settings } from "lucide-react";

import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return ( 
    <>
      <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className="p-2 w-fit rounded-md bg-neutral-300/10">
          <Settings className="w-10 h-10 text-neutral-300" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">
            Settings
          </h2>
          <p className="text-sm text-muted-foreground">
            Here you can manage your subscription 
          </p>
        </div>
      </div>
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro ? "You are currently on a Pro plan." : "You are currently on a free plan."}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </>
   );
}
 
export default SettingsPage;
