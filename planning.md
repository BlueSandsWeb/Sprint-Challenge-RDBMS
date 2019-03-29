Data Model:

Project:
  -ID (pk)
  -name (unique)
  -description (text)
  -finished (boolean)

Project to action relationship:
  one  -->  many

Action:
  -ID (pk)
  -project_ID(fk)
  -description (text)
  -notes (text)
  -finished (boolean)