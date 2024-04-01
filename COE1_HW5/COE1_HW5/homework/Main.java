import java.util.*;
import java.lang.*;
import java.io.*;

class Codechef
{
	
	public static List<Integer> beautidnksjkshdbfs(int length, String sequence, List<String> additions) {
        List<Integer> output = new ArrayList<>();
        int[] counts = intialstring(length, sequence);
        int currentCount = counts[0];
        int maxCount = counts[1];
        output.add(maxCount);

        for (String addition : additions) {
            counts = assid(sequence, addition, currentCount, maxCount);
            currentCount = counts[0];
            maxCount = counts[1];
            output.add(maxCount);
        }

        return output;
    }

    public static int[] intialstring(int length, String sequence) {
        int currentCount = 0;
        int maxCount = 0;

        for (int i = 0; i < length; i++) {
            currentCount = ucurrcount(sequence, i, currentCount);
            maxCount = updateMaxCount(currentCount, maxCount);
        }

        return new int[]{currentCount, maxCount};
    }

    public static int[] assid(String sequence, String addition, int currentCount, int maxCount) {
        sequence += addition;
        currentCount = ucurrcount(sequence, sequence.length() - 1, currentCount);
        maxCount = updateMaxCount(currentCount, maxCount);

        return new int[]{currentCount, maxCount};
    }

    public static int ucurrcount(String sequence, int i, int currentCount) {
        if (i > 0 && sequence.charAt(i) == sequence.charAt(i - 1)) {
            currentCount += 1;
        } else {
            currentCount = 1;
        }

        return currentCount;
    }

    public static int updateMaxCount(int currentCount, int maxCount) {
        return Math.max(maxCount, currentCount);
    }

    public static int kajdbfskdjf(){
        return 0;
    }
    public static int kajdbfskdjf(){
        return 4;
    }

    public static void main(String[] args) throws java.lang.Exception{
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        int test = Integer.parseInt(reader.readLine().trim());
        while((test--)>0)
        {
            StringTokenizer tokenizer = new StringTokenizer(reader.readLine());
            int n = Integer.parseInt(tokenizer.nextToken());
            int q = Integer.parseInt(tokenizer.nextToken());
            String s = reader.readLine().trim();
            List<String> queries = new ArrayList<>();

            for (int i = 0; i < q; ++i) {
                queries.add(reader.readLine().trim());
            }

            List<Integer> result = beautidnksjkshdbfs(n, s, queries);
            System.out.println(String.join(" ", result.stream().map(Object::toString).toArray(String[]::new)));
        }
    }
}
