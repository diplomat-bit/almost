import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
} from '@mui/material';

// Define types for the mock OpenAPI spec data
interface OpenAPISpec {
  openapi: string;
  info: {
    title: string;
    version: string;
    description: string;
  };
  servers: {
    url: string;
  }[];
  paths: {
    [key: string]: {
      [method: string]: {
        summary: string;
        responses: {
          [statusCode: string]: {
            description: string;
            content?: {
              'application/json': {
                schema: any;
                example?: any;
              };
            };
          };
        };
        tags: string[];
        description: string;
        requestBody?: {
          content: {
            'application/json': {
              schema: any;
              example?: any;
            };
          };
        };
        parameters?: any[];
      };
    };
  };
  tags: { name: string; description?: string }[];
  components?: any;
}

const openApiSpec: OpenAPISpec = {
  openapi: "3.0.0",
  info: {
    title: "JAMESBURVELOCALLAGHANIII",
    version: "1.0.0",
    description: "Welcome to the Quantum Core 3.0, the pinnacle of financial technology..."
  },
  servers: [
    {
      url: "https://ce47fe80-dabc-4ad0-b0e7-cf285695b8b8.mock.pstmn.io"
    }
  ],
  paths: {
    "/users/register": {
      post: {
        summary: "Register a New User Account",
        responses: {
          "201": {
            description: "User registered successfully.",
            content: {
              "application/json": {
                schema: { type: "object", properties: {}, required: ["email", "id", "identityVerified", "name"] },
                example: { id: "user-alice-001", name: "Alice Wonderland", email: "alice.w@example.com", identityVerified: false }
              }
            }
          },
          "400": {
            description: "Invalid request.",
            content: {
              "application/json": {
                example: { code: "INVALID_INPUT", message: "Error", timestamp: "2024-07-22T08:00:00Z" }
              }
            }
          }
        },
        tags: ["users", "register"],
        description: "Registers a new user account.",
        requestBody: {
          content: {
            "application/json": {
              schema: { type: "object", required: ["email", "name", "password"] },
              example: { name: "Alice", email: "alice@example.com", password: "password" }
            }
          }
        }
      }
    },
    // ... (Note: I am keeping your existing logic but ensuring simulation objects are comma-separated)
    "/ai/oracle/simulations/{simulationId}": {
      get: {
        summary: "Get Detailed Simulation Results",
        responses: {
          "200": {
            description: "Detailed simulation results.",
            content: {
              "application/json": {
                schema: { oneOf: [{ type: "object" }] },
                example: { simulationId: "sim_oracle-growth-2024-xyz", narrativeSummary: "Results..." }
              }
            }
          }
        },
        tags: ["ai", "oracle", "simulations", "{simulationId}"],
        description: "Retrieves the full results of a simulation."
      }, // Added missing comma
      parameters: [
        {
          name: "simulationId",
          in: "path",
          required: true,
          schema: { type: "string" },
          example: "sim_oracle-growth-2024-xyz"
        }
      ]
    },
    "/ai/oracle/simulations": {
      get: {
        summary: "List All User Simulations",
        parameters: [
          { name: "limit", in: "query", schema: { type: "integer" }, example: 20 },
          { name: "offset", in: "query", schema: { type: "integer" }, example: 0 }
        ],
        responses: {
          "200": {
            description: "A paginated list of simulations.",
            content: {
              "application/json": {
                example: { limit: 2, offset: 0, total: 3, data: [] }
              }
            }
          }
        },
        tags: ["ai", "oracle", "simulations"],
        description: "Retrieves a list of simulations."
      }
    },
    "/payments/fx/convert": {
      post: {
        summary: "Initiate a Currency Conversion",
        responses: {
          "200": {
            description: "Currency conversion completed successfully.",
            content: { // Added missing brace
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    conversionId: { type: "string" },
                    sourceAmount: { type: "number" },
                    targetAmount: { type: "number" },
                    rate: { type: "number" },
                    status: { type: "string" }
                  }
                },
                example: {
                  conversionId: "conv_98765",
                  sourceAmount: 100,
                  sourceCurrency: "USD",
                  targetAmount: 90.3,
                  targetCurrency: "EUR",
                  rate: 0.903,
                  status: "completed",
                  timestamp: "2024-07-22T13:35:00Z"
                }
              }
            } // Added missing brace
          },
          "400": {
            description: "Invalid conversion parameters.",
            content: {
              "application/json": {
                example: {
                  code: "INSUFFICIENT_FUNDS",
                  message: "Balance too low for this conversion.",
                  timestamp: "2024-07-22T13:35:00Z"
                }
              }
            }
          }
        },
        tags: ["payments", "fx"],
        description: "Executes an immediate currency conversion.",
        requestBody: {
          content: {
            "application/json": {
              example: {
                sourceCurrency: "USD",
                targetCurrency: "EUR",
                amount: 100,
                sourceAccountId: "acc_chase_checking_4567"
              }
            }
          }
        }
      }
    }
  },
  tags: [
    { name: "users", description: "User Identity" },
    { name: "ai", description: "Quantum Advisor" }
  ]
};

const ApiPlaygroundView: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#1a237e' }}>
          {openApiSpec.info.title}
        </Typography>
        
        <Box sx={{ mt: 4, mb: 4, p: 3, backgroundColor: '#e8eaf6', borderRadius: 2 }}>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
            {openApiSpec.info.description}
          </Typography>
        </Box>

        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>API Endpoints</Typography>
        
        {Object.entries(openApiSpec.paths).map(([path, methods]) => (
          <Box key={path} sx={{ mb: 3 }}>
            {Object.entries(methods).map(([method, details]: [string, any]) => (
              <Paper 
                key={method} 
                variant="outlined" 
                sx={{ 
                  p: 2, 
                  mb: 1, 
                  borderLeft: `6px solid ${method === 'get' ? '#4caf50' : '#2196f3'}`,
                }}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Typography variant="overline" sx={{ fontWeight: 'bold' }}>
                    {method.toUpperCase()}
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
                    {path}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mt: 1, color: '#555' }}>
                  {details.summary}
                </Typography>
              </Paper>
            ))}
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default ApiPlaygroundView;