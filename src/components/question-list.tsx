import { QuestionItem } from './question-item';

export function QuestionList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-foreground">
          Perguntas & Respostas
        </h2>
      </div>

      <QuestionItem
        question={{
          id: '1',
          question: 'Pergunta 1',
          createdAt: new Date().toISOString()
        }}
      />
    </div>
  );
}
