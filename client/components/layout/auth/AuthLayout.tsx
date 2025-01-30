// components/layout/auth/AuthLayout.tsx
import { ReactNode } from "react";
import { Container, Box, Typography } from "@mui/material";
import Image from "next/image";
import CustomBox from "@/components/box/CustomBox";

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
      }}
    >
      <CustomBox
        sx={{
          width: "100%", 
          backgroundColor: "white", 
          padding: 4, 
          borderRadius: 3, 
          boxShadow: 3,
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
        
        {/* Heading below the logo
        <Typography variant="h5" sx={{ mt: 2, color: "text.primary", fontWeight: 600 }}>
          {heading}
        </Typography> */}

        {/* Spacer between heading and children */}
        <Box sx={{ mt: 3, width: "100%" }}>
          {/* Main content (children, which will be the login form or other components) */}
          {children}
        </Box>
      </CustomBox>
    </Container>
  );
}
