import Papa from 'papaparse';

export const commonStyles = {
    bgcolor: 'black',
    borderColor: 'text.primary',
    m: 1,
    padding: 1,
    border: 1
};

export async function getDataFromCSV(filePath, variableFunc){
    const resp = await fetch(filePath);
    const reader = resp.body.getReader();
    const result = await reader.read();
    const d = new TextDecoder('utf-8');
    const csv = d.decode(result.value);

    const results = Papa.parse(csv, {header: true});
    const rows = results.data;
   
    variableFunc(rows);
}