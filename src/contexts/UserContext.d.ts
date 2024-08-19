
import * as React from 'react';

// Define the shape of your context
interface UserContextType {
  userType: string | null;
  setUserType: (type: string) => void;
}

// Export the context and hook
export const UserContext: React.Context<UserContextType>;
export const UserProvider: React.FC;
export const useUser: () => UserContextType;
