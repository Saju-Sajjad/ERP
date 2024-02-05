import { Suspense, lazy } from "react";
import SuspenseLoader from "../components/SuspenseLoader";
import Dashboard from "../content/CustomerManagement/Dashboard/Dashboard";

const Loader = (Component) => {
  const WrappedComponent = (props) => (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

  // Add display name
  WrappedComponent.displayName = `Loader(${getDisplayName(Component)})`;

  return WrappedComponent;
};

// Helper function to get the display name of a component
function getDisplayName(Component) {
  return Component.displayName || Component.name || "Component";
}



const Profile = Loader(
  lazy(() => import("../content/CustomerManagement/Dashboard/Profile"))
);
Profile.displayName = "Profile";

const BookingHistory = Loader(
  lazy(() => import("../content/CustomerManagement/Dashboard/BookingHistory"))
);
BookingHistory.displayName = "BookingHistory";

const Preferences = Loader(
  lazy(() => import("../content/CustomerManagement/Dashboard/Preference"))
);
Preferences.displayName = "Preferences";

const PersonalizedRecommendation = Loader(
  lazy(() =>
    import("../content/CustomerManagement/Dashboard/PersonalRecommendation")
  )
);
PersonalizedRecommendation.displayName = "PersonalizedRecommendation";

const LoyaltyPoints = Loader(
  lazy(() => import("../content/CustomerManagement/Dashboard/LoyaltyPoints"))
);
LoyaltyPoints.displayName = "LoyaltyPoints";

const FeedBack = Loader(
  lazy(() => import("../content/CustomerManagement/Dashboard/FeedBack"))
);
FeedBack.displayName = "FeedBack";

const CumminicationPreferences = Loader(
  lazy(() =>
    import("../content/CustomerManagement/Dashboard/CumminicationPreferences")
  )
);
CumminicationPreferences.displayName = "CumminicationPreferences";

// ...

const CustomerManagementRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      { path: "profile", component: Profile },
      { path: "booking-history", component: BookingHistory },
      { path: "preferences", component: Preferences },
      {
        path: "personalized-recommendation",
        component: PersonalizedRecommendation,
      },
      { path: "loyalty-points", component: LoyaltyPoints },
      { path: "FeedBack-Summery", component: FeedBack },
      {
        path: "Cumminication-Preferences",
        component: CumminicationPreferences,
      },
    ],
  },
];

export default CustomerManagementRoutes;
