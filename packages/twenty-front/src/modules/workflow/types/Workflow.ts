type BaseWorkflowStepSettings = {
  errorHandlingOptions: {
    retryOnFailure: {
      value: boolean;
    };
    continueOnFailure: {
      value: boolean;
    };
  };
};

export type WorkflowCodeStepSettings = BaseWorkflowStepSettings & {
  serverlessFunctionId: string;
};

export type WorkflowSendEmailStepSettings = BaseWorkflowStepSettings & {
  connectedAccountId: string;
  subject?: string;
  body?: string;
};

type BaseWorkflowStep = {
  id: string;
  name: string;
  valid: boolean;
};

export type WorkflowCodeStep = BaseWorkflowStep & {
  type: 'CODE';
  settings: WorkflowCodeStepSettings;
};

export type WorkflowSendEmailStep = BaseWorkflowStep & {
  type: 'SEND_EMAIL';
  settings: WorkflowSendEmailStepSettings;
};

export type WorkflowAction = WorkflowCodeStep | WorkflowSendEmailStep;

export type WorkflowStep = WorkflowAction;

export type WorkflowActionType = WorkflowAction['type'];

export type WorkflowStepType = WorkflowStep['type'];

export type WorkflowTriggerType = 'DATABASE_EVENT';

type BaseTrigger = {
  type: WorkflowTriggerType;
  input?: object;
};

export type WorkflowDatabaseEventTrigger = BaseTrigger & {
  type: 'DATABASE_EVENT';
  settings: {
    eventName: string;
  };
};

export type WorkflowTrigger = WorkflowDatabaseEventTrigger;

export type WorkflowStatus = 'DRAFT' | 'ACTIVE' | 'DEACTIVATED';

export type WorkflowVersionStatus =
  | 'DRAFT'
  | 'ACTIVE'
  | 'DEACTIVATED'
  | 'ARCHIVED';

export type WorkflowVersion = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  workflowId: string;
  trigger: WorkflowTrigger | null;
  steps: Array<WorkflowStep> | null;
  status: WorkflowVersionStatus;
  __typename: 'WorkflowVersion';
};

export type Workflow = {
  __typename: 'Workflow';
  id: string;
  name: string;
  versions: Array<WorkflowVersion>;
  lastPublishedVersionId: string;
  statuses: Array<WorkflowStatus> | null;
};

export type WorkflowWithCurrentVersion = Workflow & {
  currentVersion: WorkflowVersion;
};
