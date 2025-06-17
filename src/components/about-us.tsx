"use client";

import { motion } from "framer-motion";
import { Building2, Globe, Users, ShieldCheck, Goal, Award } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

// Team member data
const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&h=300&fit=crop",
    initials: "AJ"
  },
  {
    name: "Sarah Williams",
    role: "Chief Technical Officer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop",
    initials: "SW"
  },
  {
    name: "Marcus Patel",
    role: "Lead Infrastructure Engineer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=300&h=300&fit=crop",
    initials: "MP"
  },
  {
    name: "Emily Chen",
    role: "Head of Customer Success",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop",
    initials: "EC"
  }
];

// Values data
const coreValues = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-violet-500" />,
    title: "Trust & Security",
    description: "We build our systems and relationships on a foundation of security and trust."
  },
  {
    icon: <Goal className="h-10 w-10 text-violet-500" />,
    title: "Innovation",
    description: "We constantly push boundaries to deliver next-generation MCP server solutions."
  },
  {
    icon: <Users className="h-10 w-10 text-violet-500" />,
    title: "Customer Focus",
    description: "Our clients' success is our success. We're committed to exceptional service."
  },
  {
    icon: <Award className="h-10 w-10 text-violet-500" />,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our technology and operations."
  }
];

export function AboutUs() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Company Overview */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About MCP Server
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Founded in 2020, MCP Server has rapidly become the industry leader in model context protocol servers 
            for enterprise-grade applications. Our mission is to provide secure, scalable, and high-performance 
            solutions that empower businesses to leverage AI capabilities to their fullest potential.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center space-x-6 text-muted-foreground"
          >
            <div className="flex items-center">
              <Building2 className="mr-2 h-5 w-5" />
              <span>Founded 2020</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-2 h-5 w-5" />
              <span>120+ Team Members</span>
            </div>
            <div className="flex items-center">
              <Globe className="mr-2 h-5 w-5" />
              <span>Global Presence</span>
            </div>
          </motion.div>
        </div>
        
        <Separator className="my-16" />
        
        {/* Our Values */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at MCP Server, from how we build our technology to how we serve our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border border-border bg-card transition-all hover:shadow-md">
                  <CardHeader className="flex flex-col items-center text-center">
                    {value.icon}
                    <CardTitle className="mt-4">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-sm text-muted-foreground">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <Separator className="my-16" />
        
        {/* Our Team */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Meet Our Leadership Team</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced team of professionals is dedicated to pushing the boundaries of what's possible with MCP server technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border border-border bg-card transition-all hover:shadow-md">
                  <CardHeader className="flex flex-col items-center pb-2">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-center">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-sm font-medium text-muted-foreground">
                      {member.role}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
