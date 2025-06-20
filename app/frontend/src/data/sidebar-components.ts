import {
  ArrowDownToLine,
  ArrowUpFromLine,
  BadgeDollarSign,
  BarChart,
  Bot,
  Brain,
  FileJson,
  FileText,
  LucideIcon,
  Users
} from 'lucide-react';
import { Agent, getAgents } from './agents';

// Define component items by group
export interface ComponentItem {
  name: string;
  icon: LucideIcon;
}

export interface ComponentGroup {
  name: string;
  icon: LucideIcon;
  iconColor: string;
  items: ComponentItem[];
}

/**
 * Get all component groups, including agents fetched from the backend
 */
export const getComponentGroups = async (): Promise<ComponentGroup[]> => {
  const agents = await getAgents();
  
  return [
    {
      name: "agents",
      icon: Bot,
      iconColor: "text-red-400",
      items: agents.map((agent: Agent) => ({
        name: agent.display_name,
        icon: Bot
      }))
    },
    {
      name: "inputs",
      icon: ArrowDownToLine,
      iconColor: "text-blue-400",
      items: [
        // { name: "Chat Input", icon: MessageSquare },
        { name: "Portfolio Manager", icon: Brain },
        // { name: "File Input", icon: FileText }
      ]
    },
    {
      name: "outputs",
      icon: ArrowUpFromLine,
      iconColor: "text-green-400",
      items: [
        { name: "JSON Output", icon: FileJson },
        { name: "Investment Report", icon: FileText },
      ]
    },
    {
      name: "swarms",
      icon: Users,
      iconColor: "text-yellow-400",
      items: [
        { name: "Data Wizards", icon: BarChart },
        { name: "Value Investors", icon: BadgeDollarSign },
      ]
    }
  ];
};