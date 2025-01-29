// components/layout/auth/AuthLayout.tsx
import { ReactNode } from "react";
import { Container, Box, Typography } from "@mui/material";
import Image from "next/image";

type AuthLayoutProps = {
  children: ReactNode;
  heading?: string;
};

export default function AuthLayout({ children, heading = "Login to Nk-Ecommerce" }: AuthLayoutProps) {
  return (
    <Container
      component="main"
      maxWidth="xs" // Limit width of container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Center vertically
        // backgroundColor: "#f7f7f7", // Optional page background color
      }}
    >
      {/* Main container with shadow and border-radius */}
      <Box
        sx={{
          width: "100%", // Full width inside the container
          backgroundColor: "white", // Background color for the form area
          padding: 4, // Padding inside the box
          borderRadius: 3, // Rounded corners
          boxShadow: 3, // Shadow around the box
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Login label at the top */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: "primary.main" }}>
          Login
        </Typography>

        {/* Logo */}
        <Image
          src="https://i.postimg.cc/pLrvYmjS/NKJ.jpg" // Path to your logo
          alt="Nk-Ecommerce Logo"
          width={120}
          height={40}
        />
        
        {/* Heading below the logo */}
        <Typography variant="h5" sx={{ mt: 2, color: "text.primary", fontWeight: 600 }}>
          {heading}
        </Typography>

        {/* Spacer between heading and children */}
        <Box sx={{ mt: 3, width: "100%" }}>
          {/* Main content (children, which will be the login form or other components) */}
          {children}
        </Box>
      </Box>
    </Container>
  );
}
