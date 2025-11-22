import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockObjectives } from '@/lib/mock-data';
import { formatNumber, formatPercent } from '@/lib/utils';
import { Plus, Target } from 'lucide-react';

export default function ObjectivesPage() {
  const statusColors: Record<string, 'success' | 'warning' | 'error'> = {
    'on-track': 'success',
    'at-risk': 'warning',
    'completed': 'success',
  };

  const statusLabels: Record<string, string> = {
    'on-track': 'On Track',
    'at-risk': 'At Risk',
    'completed': 'Completed',
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Objectives</h1>
          <p className="text-text-secondary">
            Set and track your advertising goals
          </p>
        </div>
        <Button variant="primary">
          <Plus className="w-4 h-4 mr-2" />
          New Objective
        </Button>
      </div>

      {/* Objectives List */}
      <div className="space-y-4">
        {mockObjectives.map((objective) => {
          const progress = (objective.currentValue / objective.targetValue) * 100;
          const isInverse = objective.targetMetric === 'CPC'; // Lower is better for CPC

          return (
            <Card key={objective.id} hover>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-text-primary">
                          {objective.title}
                        </h3>
                        <Badge variant={statusColors[objective.status]}>
                          {statusLabels[objective.status]}
                        </Badge>
                      </div>
                      <p className="text-text-secondary text-sm mb-2">
                        {objective.description}
                      </p>
                      <p className="text-xs text-text-tertiary">
                        Deadline: {objective.deadline}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Progress</span>
                    <span className="text-text-primary font-semibold">
                      {objective.targetMetric === 'CPC' ? (
                        <>
                          ${objective.currentValue.toFixed(2)} / ${objective.targetValue.toFixed(2)}
                        </>
                      ) : objective.targetMetric === 'ROAS' ? (
                        <>
                          {objective.currentValue.toFixed(1)}x / {objective.targetValue.toFixed(1)}x
                        </>
                      ) : (
                        <>
                          {formatNumber(objective.currentValue)} / {formatNumber(objective.targetValue)}
                        </>
                      )}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-3 bg-surface-elevated rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        objective.status === 'on-track'
                          ? 'bg-gradient-to-r from-success to-success'
                          : objective.status === 'at-risk'
                          ? 'bg-gradient-to-r from-warning to-warning'
                          : 'bg-gradient-to-r from-primary to-accent'
                      }`}
                      style={{
                        width: `${Math.min(100, isInverse ? (objective.targetValue / objective.currentValue) * 100 : progress)}%`,
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-text-tertiary">
                    <span>
                      {isInverse
                        ? formatPercent((objective.targetValue / objective.currentValue) * 100)
                        : formatPercent(progress)}{' '}
                      complete
                    </span>
                    <span>
                      {isInverse ? (
                        <>
                          ${(objective.currentValue - objective.targetValue).toFixed(2)} to reduce
                        </>
                      ) : (
                        <>
                          {formatNumber(objective.targetValue - objective.currentValue)} remaining
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Empty State (if no objectives) */}
      {mockObjectives.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Target className="w-12 h-12 text-text-tertiary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              No objectives yet
            </h3>
            <p className="text-text-secondary mb-6">
              Start tracking your progress by creating your first advertising objective
            </p>
            <Button variant="primary">
              <Plus className="w-4 h-4 mr-2" />
              Create Objective
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
